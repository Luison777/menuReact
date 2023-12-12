"use client"

import CreateDish from "@/components/createdish"
import CreateSection from "@/components/createsection"
import CreateSubsection from "@/components/createsubsection"

export default function CreatePage(){
 
    return(
        <> 
            <CreateDish></CreateDish>
            <CreateSection></CreateSection>
            <CreateSubsection></CreateSubsection>
        </>
    )
}