({
	fireCompEvent : function(cmp, evt, hlp) {
        var evt = cmp.getEvent("compEvent");
        var msg2 = cmp.get("v.src");
        evt.setParam("message", msg2);
        evt.fire();
	},
    fireAppEvent : function(cmp, evt, hlp) {
        var evt = cmp.getEvent("appEvent");
        var msg = cmp.get("v.src2");
        evt.setParam("message", msg);
        evt.fire();
	},
	fireBlaEvent : function(cmp, evt, hlp) {
        var evt = $A.get("e.myNamespace:myEvent");
        var msg = cmp.get("v.src2");
        evt.setParam("message", msg);
        evt.fire();
	},
	fireFooEvent : function(cmp, evt, hlp) {
        var evt = cmp.get("e.myEvent");
        var msg = cmp.get("v.src2");
        evt.setParam("message", msg);
        evt.fire();
	}
})