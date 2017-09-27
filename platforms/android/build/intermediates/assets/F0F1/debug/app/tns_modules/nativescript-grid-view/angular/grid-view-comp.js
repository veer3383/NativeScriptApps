"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var profiling_1 = require("tns-core-modules/profiling");
var trace_1 = require("tns-core-modules/trace");
var layout_base_1 = require("tns-core-modules/ui/layouts/layout-base");
var grid_view_1 = require("../grid-view");
var collection_facade_1 = require("nativescript-angular/collection-facade");
var element_registry_1 = require("nativescript-angular/element-registry");
exports.gridViewTraceCategory = "ns-grid-view";
function gridViewLog(message) {
    trace_1.write(message, exports.gridViewTraceCategory);
}
exports.gridViewLog = gridViewLog;
function listViewError(message) {
    trace_1.write(message, exports.gridViewTraceCategory, trace_1.messageType.error);
}
exports.listViewError = listViewError;
var NG_VIEW = "_ngViewRef";
var GridItemContext = (function () {
    function GridItemContext($implicit, item, index, even, odd) {
        this.$implicit = $implicit;
        this.item = item;
        this.index = index;
        this.even = even;
        this.odd = odd;
    }
    return GridItemContext;
}());
exports.GridItemContext = GridItemContext;
var GridViewComponent = (function () {
    function GridViewComponent(_elementRef, _iterableDiffers, _cdr) {
        this._iterableDiffers = _iterableDiffers;
        this._cdr = _cdr;
        this.setupGridView = new core_1.EventEmitter();
        this.gridView = _elementRef.nativeElement;
        this.gridView.on(grid_view_1.GridView.itemLoadingEvent, this.onItemLoading, this);
    }
    Object.defineProperty(GridViewComponent.prototype, "nativeElement", {
        get: function () {
            return this.gridView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridViewComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
            var needDiffer = true;
            if (value instanceof observable_array_1.ObservableArray) {
                needDiffer = false;
            }
            if (needDiffer && !this._differ && collection_facade_1.isListLikeIterable(value)) {
                this._differ = this._iterableDiffers.find(this._items)
                    .create(this._cdr, function (_index, item) { return item; });
            }
            this.gridView.items = this._items;
        },
        enumerable: true,
        configurable: true
    });
    GridViewComponent.prototype.ngAfterContentInit = function () {
        gridViewLog("GridView.ngAfterContentInit()");
        this.setItemTemplates();
    };
    GridViewComponent.prototype.ngAfterViewInit = function () {
        gridViewLog("GridView.ngAfterViewInit()");
    };
    GridViewComponent.prototype.ngOnDestroy = function () {
        this.gridView.off(grid_view_1.GridView.itemLoadingEvent, this.onItemLoading, this);
    };
    GridViewComponent.prototype.ngDoCheck = function () {
        gridViewLog("ngDoCheck() - execute differ? " + this._differ);
        if (this._differ) {
            gridViewLog("ngDoCheck() - execute differ");
            var changes = this._differ.diff(this._items);
            if (changes) {
                gridViewLog("ngDoCheck() - refresh");
                this.refresh();
            }
        }
    };
    GridViewComponent.prototype.onItemLoading = function (args) {
        if (!args.view && !this.itemTemplate) {
            return;
        }
        var index = args.index;
        var items = args.object.items;
        var currentItem = typeof items.getItem === "function" ? items.getItem(index) : items[index];
        var viewRef;
        if (args.view) {
            gridViewLog("onItemLoading: " + index + " - Reusing existing view");
            viewRef = args.view[NG_VIEW];
            if (!viewRef && args.view instanceof layout_base_1.LayoutBase && args.view.getChildrenCount() > 0) {
                viewRef = args.view.getChildAt(0)[NG_VIEW];
            }
            if (!viewRef) {
                listViewError("ViewReference not found for item " + index + ". View recycling is not working");
            }
        }
        if (!viewRef) {
            gridViewLog("onItemLoading: " + index + " - Creating view from template");
            viewRef = this.loader.createEmbeddedView(this.itemTemplate, new GridItemContext(), 0);
            args.view = getGridItemRoot(viewRef);
            args.view[NG_VIEW] = viewRef;
        }
        this.setupViewRef(viewRef, currentItem, index);
        this.detectChangesOnChild(viewRef, index);
    };
    GridViewComponent.prototype.setupViewRef = function (view, data, index) {
        var context = view.context;
        context.$implicit = data;
        context.item = data;
        context.index = index;
        context.even = (index % 2 === 0);
        context.odd = !context.even;
        this.setupGridView.next({
            context: context,
            data: data,
            index: index,
            view: view,
        });
    };
    GridViewComponent.prototype.setItemTemplates = function () {
        var _this = this;
        this.itemTemplate = this.itemTemplateQuery;
        this.gridView.itemTemplate = function () {
            var viewRef = _this.loader.createEmbeddedView(_this.itemTemplate, new GridItemContext(), 0);
            var resultView = getGridItemRoot(viewRef);
            resultView[NG_VIEW] = viewRef;
            return resultView;
        };
    };
    GridViewComponent.prototype.detectChangesOnChild = function (viewRef, index) {
        gridViewLog("Manually detect changes in child: " + index);
        viewRef.markForCheck();
        viewRef.detectChanges();
    };
    GridViewComponent.prototype.refresh = function () {
        if (this.gridView) {
            this.gridView.refresh();
        }
    };
    return GridViewComponent;
}());
__decorate([
    core_1.ViewChild("loader", { read: core_1.ViewContainerRef })
], GridViewComponent.prototype, "loader", void 0);
__decorate([
    core_1.Output()
], GridViewComponent.prototype, "setupGridView", void 0);
__decorate([
    core_1.ContentChild(core_1.TemplateRef)
], GridViewComponent.prototype, "itemTemplateQuery", void 0);
__decorate([
    core_1.Input()
], GridViewComponent.prototype, "items", null);
__decorate([
    profiling_1.profile
], GridViewComponent.prototype, "onItemLoading", null);
__decorate([
    profiling_1.profile
], GridViewComponent.prototype, "detectChangesOnChild", null);
GridViewComponent = __decorate([
    core_1.Component({
        selector: "GridView",
        template: "\n        <DetachedContainer>\n            <Placeholder #loader></Placeholder>\n        </DetachedContainer>",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __param(0, core_1.Inject(core_1.ElementRef)),
    __param(1, core_1.Inject(core_1.IterableDiffers)),
    __param(2, core_1.Inject(core_1.ChangeDetectorRef))
], GridViewComponent);
exports.GridViewComponent = GridViewComponent;
function getGridItemRoot(viewRef, rootLocator) {
    if (rootLocator === void 0) { rootLocator = element_registry_1.getSingleViewRecursive; }
    var rootView = rootLocator(viewRef.rootNodes, 0);
    return rootView;
}
exports.getGridItemRoot = getGridItemRoot;
if (!element_registry_1.isKnownView("GridView")) {
    element_registry_1.registerElement("GridView", function () { return grid_view_1.GridView; });
}
