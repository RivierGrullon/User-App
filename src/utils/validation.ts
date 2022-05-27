import { useUserStore } from "../stores/UserStore";

const store = useUserStore();
export async function verifyResponseData(response: any) {
    const data = await response.json();
    if (data.errors) {
      if (data.errors.data.length > 0) {
        store.multipleErrors = data.errors.data[0];
      }
      store.error = data.errors.message;
      throw new Error("klk");
    } else {
      store.token = data.session.token;
      store.user = data.user;
      store.isAuth = true;
      store.error = "";
      store.multipleErrors = [];
      return true;
    }
}