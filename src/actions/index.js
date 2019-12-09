
export const newLogin = (event) => {
    return {
        type: "NEW_LOGIN",
        payload: {
            event: event
        }
    }
}

export const score_final = (event) =>{
    return {
        type : "SCORE_FINAL",
        payload : {
            event : event
        }
    }
}