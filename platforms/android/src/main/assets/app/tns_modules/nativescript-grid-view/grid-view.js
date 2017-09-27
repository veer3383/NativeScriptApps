/*! *****************************************************************************
Copyright (c) 2017 Tangra Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
***************************************************************************** */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("utils/utils");
var grid_view_common_1 = require("./grid-view-common");
__export(require("./grid-view-common"));
var GridView = (function (_super) {
    __extends(GridView, _super);
    function GridView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._realizedItems = new Map();
        return _this;
    }
    GridView.prototype.createNativeView = function () {
        var recyclerView = new GridViewRecyclerView(this._context, new WeakRef(this));
        var adapter = new GridViewAdapter(new WeakRef(this));
        adapter.setHasStableIds(true);
        recyclerView.setAdapter(adapter);
        recyclerView.adapter = adapter;
        var orientation = this._getLayoutManagarOrientation();
        var layoutManager = new android.support.v7.widget.GridLayoutManager(this._context, 1);
        recyclerView.setLayoutManager(layoutManager);
        layoutManager.setOrientation(orientation);
        recyclerView.layoutManager = layoutManager;
        var scrollListener = new GridViewScrollListener(new WeakRef(this));
        recyclerView.addOnScrollListener(scrollListener);
        recyclerView.scrollListener = scrollListener;
        return recyclerView;
    };
    GridView.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        var nativeView = this.nativeView;
        nativeView.adapter.owner = new WeakRef(this);
        nativeView.scrollListener.owner = new WeakRef(this);
        nativeView.owner = new WeakRef(this);
        grid_view_common_1.colWidthProperty.coerce(this);
        grid_view_common_1.rowHeightProperty.coerce(this);
    };
    GridView.prototype.disposeNativeView = function () {
        this.eachChildView(function (view) {
            view.parent._removeView(view);
            return true;
        });
        this._realizedItems.clear();
        var nativeView = this.nativeView;
        this.nativeView.removeOnScrollListener(nativeView.scrollListener);
        nativeView.scrollListener = null;
        nativeView.adapter = null;
        nativeView.layoutManager = null;
        _super.prototype.disposeNativeView.call(this);
    };
    Object.defineProperty(GridView.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridView.prototype, "_childrenCount", {
        get: function () {
            return this._realizedItems.size;
        },
        enumerable: true,
        configurable: true
    });
    GridView.prototype[grid_view_common_1.paddingTopProperty.getDefault] = function () {
        return this.nativeView.getPaddingTop();
    };
    GridView.prototype[grid_view_common_1.paddingTopProperty.setNative] = function (value) {
        this._setPadding({ top: this.effectivePaddingTop });
    };
    GridView.prototype[grid_view_common_1.paddingRightProperty.getDefault] = function () {
        return this.nativeView.getPaddingRight();
    };
    GridView.prototype[grid_view_common_1.paddingRightProperty.setNative] = function (value) {
        this._setPadding({ right: this.effectivePaddingRight });
    };
    GridView.prototype[grid_view_common_1.paddingBottomProperty.getDefault] = function () {
        return this.nativeView.getPaddingBottom();
    };
    GridView.prototype[grid_view_common_1.paddingBottomProperty.setNative] = function (value) {
        this._setPadding({ bottom: this.effectivePaddingBottom });
    };
    GridView.prototype[grid_view_common_1.paddingLeftProperty.getDefault] = function () {
        return this.nativeView.getPaddingLeft();
    };
    GridView.prototype[grid_view_common_1.paddingLeftProperty.setNative] = function (value) {
        this._setPadding({ left: this.effectivePaddingLeft });
    };
    GridView.prototype[grid_view_common_1.orientationProperty.getDefault] = function () {
        var layoutManager = this.nativeView.getLayoutManager();
        if (layoutManager.getOrientation() === android.support.v7.widget.LinearLayoutManager.HORIZONTAL) {
            return "horizontal";
        }
        return "vertical";
    };
    GridView.prototype[grid_view_common_1.orientationProperty.setNative] = function (value) {
        var layoutManager = this.nativeView.getLayoutManager();
        if (value === "horizontal") {
            layoutManager.setOrientation(android.support.v7.widget.LinearLayoutManager.HORIZONTAL);
        }
        else {
            layoutManager.setOrientation(android.support.v7.widget.LinearLayoutManager.VERTICAL);
        }
    };
    GridView.prototype.eachChildView = function (callback) {
        this._realizedItems.forEach(function (view, key) {
            callback(view);
        });
    };
    GridView.prototype.onLayout = function (left, top, right, bottom) {
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        this.refresh();
    };
    GridView.prototype.refresh = function () {
        if (!this.nativeView || !this.nativeView.getAdapter()) {
            return;
        }
        var layoutManager = this.nativeView.getLayoutManager();
        var spanCount;
        if (this.orientation === "horizontal") {
            spanCount = Math.max(Math.floor(this._innerHeight / this._effectiveRowHeight), 1) || 1;
        }
        else {
            spanCount = Math.max(Math.floor(this._innerWidth / this._effectiveColWidth), 1) || 1;
        }
        layoutManager.setSpanCount(spanCount);
        this.nativeView.getAdapter().notifyDataSetChanged();
    };
    GridView.prototype._getRealizedView = function (convertView) {
        if (!convertView) {
            return this._getItemTemplateContent();
        }
        return this._realizedItems.get(convertView);
    };
    GridView.prototype._setPadding = function (newPadding) {
        var nativeView = this.nativeView;
        var padding = {
            top: nativeView.getPaddingTop(),
            right: nativeView.getPaddingRight(),
            bottom: nativeView.getPaddingBottom(),
            left: nativeView.getPaddingLeft()
        };
        var newValue = Object.assign(padding, newPadding);
        nativeView.setPadding(newValue.left, newValue.top, newValue.right, newValue.bottom);
    };
    GridView.prototype._getLayoutManagarOrientation = function () {
        var orientation = android.support.v7.widget.LinearLayoutManager.VERTICAL;
        if (this.orientation === "horizontal") {
            orientation = android.support.v7.widget.LinearLayoutManager.HORIZONTAL;
        }
        return orientation;
    };
    return GridView;
}(grid_view_common_1.GridViewBase));
exports.GridView = GridView;
var GridViewScrollListener = (function (_super) {
    __extends(GridViewScrollListener, _super);
    function GridViewScrollListener(owner) {
        var _this = _super.call(this) || this;
        _this.owner = owner;
        return global.__native(_this);
    }
    GridViewScrollListener.prototype.onScrolled = function (view, dx, dy) {
        var owner = this.owner.get();
        if (!owner) {
            return;
        }
        var lastVisibleItemPos = view.getLayoutManager().findLastCompletelyVisibleItemPosition();
        var itemCount = owner.items.length - 1;
        if (lastVisibleItemPos === itemCount) {
            owner.notify({
                eventName: grid_view_common_1.GridViewBase.loadMoreItemsEvent,
                object: owner
            });
        }
    };
    GridViewScrollListener.prototype.onScrollStateChanged = function (view, newState) {
    };
    return GridViewScrollListener;
}(android.support.v7.widget.RecyclerView.OnScrollListener));
var GridViewCellHolder = (function (_super) {
    __extends(GridViewCellHolder, _super);
    function GridViewCellHolder(owner, gridView) {
        var _this = _super.call(this, owner.get().android) || this;
        _this.owner = owner;
        _this.gridView = gridView;
        var nativeThis = global.__native(_this);
        var nativeView = owner.get().android;
        nativeView.setOnClickListener(nativeThis);
        return nativeThis;
    }
    Object.defineProperty(GridViewCellHolder.prototype, "view", {
        get: function () {
            return this.owner ? this.owner.get() : null;
        },
        enumerable: true,
        configurable: true
    });
    GridViewCellHolder.prototype.onClick = function (v) {
        var gridView = this.gridView.get();
        gridView.notify({
            eventName: grid_view_common_1.GridViewBase.itemTapEvent,
            object: gridView,
            index: this.getAdapterPosition(),
            view: this.view
        });
    };
    return GridViewCellHolder;
}(android.support.v7.widget.RecyclerView.ViewHolder));
GridViewCellHolder = __decorate([
    Interfaces([android.view.View.OnClickListener])
], GridViewCellHolder);
var GridViewAdapter = (function (_super) {
    __extends(GridViewAdapter, _super);
    function GridViewAdapter(owner) {
        var _this = _super.call(this) || this;
        _this.owner = owner;
        return global.__native(_this);
    }
    GridViewAdapter.prototype.getItemCount = function () {
        var owner = this.owner.get();
        return owner.items ? owner.items.length : 0;
    };
    GridViewAdapter.prototype.getItemId = function (i) {
        return long(i);
    };
    GridViewAdapter.prototype.onCreateViewHolder = function (parent, viewType) {
        var owner = this.owner.get();
        var view = owner._getItemTemplateContent();
        owner._addView(view);
        owner._realizedItems.set(view.android, view);
        return new GridViewCellHolder(new WeakRef(view), new WeakRef(owner));
    };
    GridViewAdapter.prototype.onBindViewHolder = function (vh, index) {
        var owner = this.owner.get();
        owner.notify({
            eventName: grid_view_common_1.GridViewBase.itemLoadingEvent,
            object: owner,
            index: index,
            view: vh.view
        });
        if (owner.orientation === "horizontal") {
            vh.view.width = utils.layout.toDeviceIndependentPixels(owner._effectiveColWidth);
        }
        else {
            vh.view.height = utils.layout.toDeviceIndependentPixels(owner._effectiveRowHeight);
        }
        owner._prepareItem(vh.view, index);
    };
    return GridViewAdapter;
}(android.support.v7.widget.RecyclerView.Adapter));
var GridViewRecyclerView = (function (_super) {
    __extends(GridViewRecyclerView, _super);
    function GridViewRecyclerView(context, owner) {
        var _this = _super.call(this, context) || this;
        _this.owner = owner;
        return global.__native(_this);
    }
    GridViewRecyclerView.prototype.onLayout = function (changed, l, t, r, b) {
        if (changed) {
            var owner = this.owner.get();
            owner.onLayout(l, t, r, b);
        }
        _super.prototype.onLayout.call(this, changed, l, t, r, b);
    };
    return GridViewRecyclerView;
}(android.support.v7.widget.RecyclerView));