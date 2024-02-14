const getContacts = (req,res)=>{
    res.send("got contact");
};

const getContact = (req,res)=>{
    res.send(`Get contact details for contact id: ${req.params.id}`);
};

const createContact = (req,res)=>{
    console.log(req.body);
    res.send("Create contact");
};

const updateContact = (req,res)=>{
    res.send(`Updating for contact id: ${req.params.id}`);
};

const deleteContact = (req,res)=>{
    res.send(`Deleting for contact id: ${req.params.id}`);
};





export {getContacts,getContact,createContact,deleteContact,updateContact};