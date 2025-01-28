import instance from "@/middlewares";


export default {
  name: "okved",
  state: () => ({
    data: null,

  }),
  mutations: {
    setData(state, data) {
      state.data = data;
    },

  },
  actions: {
    // get okved
    async getOkved({ commit }) {
        try {
            const response = await instance.get("/api/okved");
            if (response) return commit("setData", response.data);
        }
        catch (error) {
            console.log(error);
        }
    },
    
    // create okved
    async createOkved({}, input) {
        try {
            const { okved_name, code } = input;
            const response = await instance.post("/api/okved", { okved_name, code });
            if (response.ok) return console.log("ok");
        }
        catch (error) {
            console.log(error);
        }
    },
    
    // update okved
    async updateOkved({}, input) {
        try {
            const { okved_id, okved_name, code } = input;
            const response = await instance.put("/api/okved", { okved_id, okved_name, code });
            if (response.ok) return console.log("ok");
        }
        catch (error) {
            console.log(error);
        }
    },
    
    // delete okved
    async deleteOkved({}, okved_id) {
        try {
            const response = await instance.delete(`/api/okved/${okved_id}`);
            if (response.ok) return console.log("ok");
        }
        catch (error) {
            console.log(error);
        }
    },
  },

  namespaced: true,
};
