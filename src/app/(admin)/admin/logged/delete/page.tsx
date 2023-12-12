"use client"

import DeleteDish from "@/components/deletedish"
import DeleteSection from "@/components/deletesection"
import DeleteSubsection from "@/components/deletesubsection"


export default function DeletePage(){
    
    return(
        <>
          <DeleteDish></DeleteDish>
          <DeleteSection></DeleteSection>
          <DeleteSubsection></DeleteSubsection>
        </>
    )
}