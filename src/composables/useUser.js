import { supabase } from "./supabase";

export async function signUp(email, password, username) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                username: username
            }
        }
    })

    if (error) {
        console.error("註冊失敗:", error.message)
        return { success: false, error: error.message }
    }

    console.log("註冊成功:", data)
    return { success: true, data }
}

export async function login(username, password) {

    const { data: email, profileError } = await supabase.rpc('get_email_by_username', { username_input: username });

    if (profileError) {
        return "用戶不存在"
    } else {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password: password,
        });

        if (error) {
            return { success: false, error: error.message }
        }
        else {
            return { success: true, data }
        }
    }
}

export async function checkLogin() {
    const { data: { session } } = await supabase.auth.getSession()

    if (session) {
        console.log("已登入 ✅", session.user)
        return true
    } else {
        console.log("未登入 ❌")
        return false
    }
}