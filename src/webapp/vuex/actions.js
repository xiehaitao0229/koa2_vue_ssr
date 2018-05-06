import request  from "axios";
request.defaults.baseURL= "http://localhost:8081/";
export const getTopics = ({commit,state})=>{
	return request.get('users/1').then((response)=>{
		if (response.statusText == 'OK') {
			commit("TOPICS_LIST",response.data.data);
		}
	})
}
export const increment = ({commit})=>commit('INCREMENT');
export const decrement = ({commit})=>commit('DECREMENT');
