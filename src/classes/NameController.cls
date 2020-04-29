public class NameController { //sfdc:source18
    

    @AuraEnabled
    public static String getId(String name) { //sfdc:source10
        return String.valueOf(UnsafeSOQL.getId(name));
    }
    
    @AuraEnabled
    public UnsafeGlobal setName(String name, String id) { //sfdc:source11
        Id obj_id = (Id)id;
        Account acc = [SELECT Name, Id FROM Account WHERE Id=:obj_id][0]; //sfdc:source5
        acc.Name = name;
        update acc; //sfdc:sink10
		UnsafeGlobal ug=new UnsafeGlobal();
		return ug;
    }
	public void bar()
	{
		
	 UnsafeGlobal ug=setName();
	 foo(ug.unsafeName);
	}
	public void foo(object x)
	{
	    alert(x);
	}
}