import { ref, computed } from "vue";
import { supabase } from "./supabase";
import router from "@/router";

const session = ref(null)

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

export async function logout() {
    await supabase.auth.signOut();
    session.value = null;
    router.push("/login");
}

export function checkLogin() {
    supabase.auth.getSession().then(({ data }) => {
        session.value = data.session
    })

    supabase.auth.onAuthStateChange((_event, newSession) => {
        session.value = newSession
    })

    return { isLoggedIn: computed(() => session.value != null) }
}