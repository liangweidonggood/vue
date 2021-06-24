import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators'
import store from '_@/store'

@Module({ dynamic: true, namespaced: true, store, name: 'user' })
class User extends VuexModule {

}
export const userStore = getModule<User>(User)
