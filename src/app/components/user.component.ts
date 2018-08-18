import { Component } from '@angular/core';
import {PostsService} from '../services/posts.services';


@Component({

    moduleId:module.id,
    selector: 'user',
    templateUrl:'user.component.html',
    providers:[PostsService]
})
export class UserComponent {
    name: string
    email: string
    address: address
    hobbies: string[]
    showhobbies: boolean
    posts:Post[]
    constructor(private postsService:PostsService) {
        this.name = 'Krishnasairam'
        this.email = "krishnasairam1997@yahoo.in"
        this.address = {
            city: "visakhapatnam",
            state: "andhra pradesh"
        }
        this.hobbies = ["Music", "Sports", "Cooking"]
        this.showhobbies = false

        this.postsService.getPosts().subscribe(posts=> 
        this.posts = posts)

    }
    togglehobbies() {
        if (this.showhobbies == true) {
            this.showhobbies = false
        }
        else {
            this.showhobbies = true
        }
    }
    addHobby(val:string){
        this.hobbies.push(val)
    }
    deleteHobby(i:number){
        this.hobbies.splice(i,1)
    }
}
interface address {
    city: string,
    state: string
}
interface Post{
    id:number,
    title:string
}