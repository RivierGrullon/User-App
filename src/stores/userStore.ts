/* eslint-disable */
import { defineStore } from 'pinia';


const api = "https://apidev.kanvas.dev/v2"

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null as string | null,
    user: null as Record<string,unknown> | null,
    error: "" as string,
    multipleErrors: [],
    isAuth: false as boolean,
  }),
  persist:true,
  actions: {
    async Register(user: unknown) {
        const response = await fetch(api + "/users", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        if (data.errors) {
          if (data.errors.data.length > 0) {
              this.multipleErrors = data.errors.data[0];
           }
            this.error = data.errors.message;
            throw new Error("klk")
        }
        else {

          this.token = data.session.token;
          this.user = data.user;
          this.isAuth = true;
          this.error = "";
          this.multipleErrors = [];
          return true
        }

    },
    async Login(email:string, password: string) {
        const user = {
            email,
            password,
        }
        const response = await fetch(api + "/auth", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        const data = await response.json();
        if (data.errors) {
          if (data.errors.data.length > 0) {
              this.multipleErrors = data.errors.data[0];
           }
            this.error = data.errors.message;
            throw new Error("klk")
        }
        else {

          this.token = data.token;
          this.user = {id: data.id}
          this.isAuth = true;
          this.error = "";
          this.multipleErrors = [];
          return true
        }
    },
    async Logout() {
        this.token = null;
        this.user = null;
        this.isAuth = false;
        this.error = "";
        this.multipleErrors = [];
    }


  },
});
