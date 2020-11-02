export const EKLE= "EKLE"
export const TEMIZLE="TEMIZLE"
export const ISARETLE="ISARETLE"

//Genarotör
export const EKLE2= "EKLE2"
export const TEMIZLE2="TEMIZLE2"
export const ISARETLE2="ISARETLE2"

export const HANDLE="HANDLE"

export const handleChange=event=>{
    return{
        type:HANDLE,
        payload:event
    }
}

export const listeyeEkle= (text) => {
    return{
        type: EKLE, payload:text
    }
};

export const isaretle=(id)=>{
    return{
        type:ISARETLE, payload:id
    }
}

export const temizle=()=>{
    return{
        type:TEMIZLE
    }
}

//Generator'ünki
export const listeyeEkle2= (text2) => {
    return{
        type: EKLE2, payload:text2
    }
};

export const isaretle2=(id)=>{
    return{
        type:ISARETLE2, payload:id
    }
}

export const temizle2=()=>{
    return{
        type:TEMIZLE2
    }
}