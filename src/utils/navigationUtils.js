import {CommonActions,createNavigationContainerRef} from '@react-navigation/native'

export const navigationRef= createNavigationContainerRef()
 export async function navigate(routeName,params){
    navigationRef.isReady()
    if(navigationRef.isReady){
        navigationRef.dispatch(CommonActions.navigate(routeName,  params))

    }
 }

 export async function resetAndNavigation(routeName){
navigationRef.isReady()
if(navigationRef.isReady()){
    navigationRef.dispatch(CommonActions.reset({
        index:0,
        routes:[{name:routeName}]
    }))
}
 }

export  async function goBack(routeName){
    navigationRef.isReady()
    if(navigationRef.isReady()){
        navigationRef.dispatch(CommonActions.goBack())
    }

}

export async function prepareNavigation(){
    await navigationRef.isReady();
}