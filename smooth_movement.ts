//% block="控制移动"
//% color="#8f1fff" icon="\u21BB"
namespace smooth_movement {

    //% block
    //% vx.defl=100 vy.defl=100
    //% expandableArgumentMode="toggle"
    //% blockid=smooth_movement_move_sprite block="用控制器顺滑移动 %sprite=variables_get(mySprite) || vx $vx vy $vy"
    //% vx.shadow="spriteSpeedPicker"
    //% vy.shadow="spriteSpeedPicker"
    export function moveSpriteSmoothly(sprite:Sprite, vx:number=100, vy : number=100) {
        smoothturn.moveSprite(sprite, vx, vy)
    }

    //% block
    //% speed.defl=50
     //% blockid=smooth_movement_random_move_sprite block="以速度 %speed 随机移动 %sprite=variables_get(mySprite) "
    export function randomMovement(sprite:Sprite,speed:number=50) {
        sprite_movement.randomlyMoveSprite(sprite, speed)
        
    }
}