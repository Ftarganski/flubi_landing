import validator from "email-validator"
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

interface WaitlistForm {
    name: string;
    company: string;
    email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // We only want to handle POST requests, everything else gets a 404
    if (req.method === 'POST') {
        await postHandler(req, res);
    } else {
        res.status(404).send("PLEASE FILL OUT CORRECTLY THE FORM");
    }
}

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
    
    try {
        const body = JSON.parse(req.body);
    const form = parseAndValidateEmail(body, res);
    await saveForm(form);
    res.status(200).send("Form received")
        
    } catch (err:any) {
        console.log(err.stack)
        res.status(503).send("An unexpected error has occurred, please try again");
    }
}

async function saveForm(waitlistForm: WaitlistForm) {
    // TODO: what to do here?
    try {
        const client = await clientPromise;
        const db = client.db("flubi-main");
        await client.connect()

      let waitlistItem = await db.collection("waitlist").insertOne(waitlistForm);
      //console.log("Got form: " + waitlistForm)
        
    } catch (err:any) {
        console.log(err.stack)
    }

    
}

// Make sure we receive a valid email
function parseAndValidateEmail(body: any, res: NextApiResponse) {
    if (!body) {
        res.status(400).send("Malformed request");
    }
    const email = body.formState.email
    const form = body.formState
    if (!email) {
        res.status(400).send("Missing email");
        return;
    } else if (email.length > 300) {
        res.status(400).send("Email is too long");
        return;
    } else if (!validator.validate(email)) {
        res.status(400).send("Invalid email");
        return;
    }

    return form
}