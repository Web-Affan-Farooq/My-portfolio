export default {
    name:"Skills",
    type:"document",
    title:"Skills",
    fields:[
        {
            name:"name",
            type:"string",
            title:"Tech name",
            initialValue:"New technology"
        },
        {
            name:"logo",
            type:"image",
            title:"Logo"
        },
        {
            name:"domain",
            type:"string",
            title:"Domain",
            initialValue:"Fullstack"
        },
        {
            name:"active",
            type:"boolean",
            title:"Is active?",
            initialValue:false,
        }
    ]
}