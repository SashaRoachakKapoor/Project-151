AFRAME.registerComponent('car',{
    schema:{
        move_x:{type:'number',default:1}
    },
    tick:function(){
        this.data.move_x=this.data.move_x+0.01
        var pos=this.el.getAttribute('position')
        pos.x=this.data.move_x
        this.el.setAttribute('position',{x:pos.x,y:pos.y,z:pos.z})
    }
})