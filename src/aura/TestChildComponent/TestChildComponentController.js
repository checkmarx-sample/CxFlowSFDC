({
	foo : function(cmp, evt, hlp) {
                cmp.set("v.Id",  cmp.get("v.prm"));
                  
	},
    setMyName : function(cmp, evt, hlp) {
        var action = cmp.get("c.setName");
        action.setParams({
            "name" : cmp.get("v.toUpdate"),
            "id" : cmp.get("v.Id")    
        });
        action.setCallback(this, function(response) {
            if (response.getState() == "SUCCESS") {
                window.alert("SUCCESS!");
            } else {
                window.alert("ERROR!");
            }
        });
        $A.enqueueAction(action);
    }
 
})