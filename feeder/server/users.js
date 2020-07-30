//// this file contain the model of data of the application, for this should be simple
//// if we want to improve we can add friend list and maybe a graph of relationship
//// could interesting approach in order to see how it would end and offer some customization
//// like friend or connection request  and so on.

class User{
    constructor(uid,name,password,date){
        this.uid  = uid;
        this.name = name;
        this.nickname="";
        this.email="";
        this.password = password;
        this.date_of_registry = date;
        this.page_status="";
    }
}

class Status{
    constructor(){
        this.uid="";
        this.username="";
        this.img_url="";
        this.date="";
    }
}

class Publication{
    constructor(){
        this.uid="";
        this.publication_id="";
        this.user_name="";
        this.like_count=0;
    }
}

class PublicationComment{
    constructor(){
        this.uid="";
        this.publication_id="";
        this.number_on_this_publication=0;
        this.comment="";
        this.user_id="";
    }
}



module.exports={
   User,
   Status,
   Publication,
   PublicationComment 
};