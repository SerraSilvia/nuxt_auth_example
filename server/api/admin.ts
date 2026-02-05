//comprova si la cookie esta activa
export default defineEventHandler(async (event)=> {
    await requireUserSession(event)
    return{sensitive:"user loged only"}
})