package com.tns.gen.android.support.v7.widget;

public class RecyclerView_Adapter_frnal_ts_helpers_l58_c38__GridViewAdapter extends android.support.v7.widget.RecyclerView.Adapter implements com.tns.NativeScriptHashCodeProvider {
	public RecyclerView_Adapter_frnal_ts_helpers_l58_c38__GridViewAdapter(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public int getItemCount()  {
		java.lang.Object[] args = null;
		return (int)com.tns.Runtime.callJSMethod(this, "getItemCount", int.class, args);
	}

	public long getItemId(int param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (long)com.tns.Runtime.callJSMethod(this, "getItemId", long.class, args);
	}

	public android.support.v7.widget.RecyclerView.ViewHolder onCreateViewHolder(android.view.ViewGroup param_0, int param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		return (android.support.v7.widget.RecyclerView.ViewHolder)com.tns.Runtime.callJSMethod(this, "onCreateViewHolder", android.support.v7.widget.RecyclerView.ViewHolder.class, args);
	}

	public void onBindViewHolder(android.support.v7.widget.RecyclerView.ViewHolder param_0, int param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onBindViewHolder", void.class, args);
	}

	public void onBindViewHolder(android.support.v7.widget.RecyclerView.ViewHolder param_0, int param_1, java.util.List param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onBindViewHolder", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
