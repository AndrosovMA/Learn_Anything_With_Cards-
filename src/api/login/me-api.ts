import {instance} from "../config/config"

export const meAPI = {
    me() {
        return instance.post("auth/me")
    },
    logout() {
        return instance.delete("auth/me")
    },
    updateMe(model: UpdateMeModelType) {
        return instance.put("auth/me", model)
    }
}

export type UpdateMeModelType = {
    name?: string
    avatar?: string
}