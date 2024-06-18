import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: 'https://graphql-pokeapi.graphcdn.app/'

    // uncomment this to configure the network call (for things like authentication)
    // for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
    // fetchParams({ session }) {
    //     return {
    //         headers: {
    //             Authentication: `Bearer ${session.token}`,
    //         }
    //     }
    // }
})