import crypto from "crypto";

function hashData(data){
return crypto.createHash("sha256").update(data.trim().toLowerCase()).digest("hex");
}

export default async function handler(req,res){

if(req.method !== "POST"){
return res.status(405).json({message:"Method not allowed"});
}

const PIXEL_ID = "1251687887065006";
const ACCESS_TOKEN = "EAAWPV6hAhtABQyl4El8MmJ0SRKEalYCUYaS9sltU6GMWZBZCCACueT6nIJxrfCgG4lXE0kF3c9S447tatxKYk4ZB3qSLSaMwZCqawXwQzj0nrJAkV3qntoX5UUjbX5xLgTKhTJkQYdm9V2hbkmZBH96UnoFzAZCJg0WXlRO7GVrlZBAZAsynU08NNNF1KYNMJ1YZAQwZDZD";

const body = req.body;

const userData = body.userData || {};

const payload = {
data:[
{
event_name:body.eventName,
event_time:Math.floor(Date.now()/1000),
event_id:body.eventId,
action_source:"website",
event_source_url:body.url,

user_data:{
fn:userData.name ? hashData(userData.name) : undefined
}
}
]
};

try{

const response = await fetch(
`https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(payload)
}
);

const data = await response.json();

res.status(200).json(data);

}catch(error){

res.status(500).json({error:error.message});

}

}