//% block="控制移动"
//% color="#8f1fff" icon="\u21BB"
namespace smooth_movement {

    //% block
    //% vx.defl = 50
    //% vy.defl = 50
    //% blockid=smooth_movement_move_sprite block="用控制器顺滑移动 %sprite=variables_get(mySprite) || vx $vx vy $vy"
    export function moveSpriteSmoothly(sprite:Sprite, vx:number=50, vy : number=50) {
        smoothturn.moveSprite(sprite, vx, vy)
    }
}