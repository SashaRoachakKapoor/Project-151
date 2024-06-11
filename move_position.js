AFRAME.registerComponent('position_of_car',{
    schema:{
        move_car:{type:'number', default:10}
    },
    update:function(){
        this.data.move_z= this.data.move_z+0.01
        var pos=this.el.getAttribute('position')
        pos.z=this.data.move_z
        this.el.setAttribute('position',{x:pos.x,y:pos.y,z:pos.z})
    }
})