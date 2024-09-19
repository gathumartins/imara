import mailchimp from '@mailchimp/mailchimp_marketing'


// ... existing code ...

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER
})

export async function POST(Request){
    const {email} = await Request.json();

    if(!email) new Response (JSON.stringify({error:"Email is required"}));

    try{
        const res = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {email_address:email, status:"subscribed"})

        return new Response(JSON.stringify({res}));
    }catch(error){
        return new Response(
            JSON.stringify({error: JSON.parse(error.response.text)})
        ) ;
    }
}