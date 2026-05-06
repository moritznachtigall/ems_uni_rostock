
/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Matrix {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="Gib Zeichen von Matrix"
    export function matrix(): string {
        
        let group = [
            ["1", "2", "3", "A"],
            ["4", "5", "6", "B"],
            ["7", "8", "9", "C"],
            ["*", "0", "#", "D"]
        ]

        let Pin_row = [
            DigitalPin.P9,
            DigitalPin.P6,
            DigitalPin.P10,
            DigitalPin.P4
        ]

        let Pin_column = [
            DigitalPin.P3,
            DigitalPin.P2,
            DigitalPin.P1,
            DigitalPin.P0
        ]


        // Alle Reihen auf LOW setzen
        for (let i = 0; i < 4; i++) {
            pins.digitalWritePin(Pin_row[i], 0)
        }

        // Alle Spalten auf LOW setzen
        for (let i = 0; i < 4; i++) {
            pins.digitalWritePin(Pin_column[i], 0)
        }

        for (let i = 0; i < 4; i++) {

            pins.digitalWritePin(Pin_row[i], 1)

            for (let j = 0; j < 4; j++) {

                if (pins.digitalReadPin(Pin_column[j]) == 1) {

                   return(group[i][j]);

                    
                }

                pins.digitalWritePin(Pin_row[i], 0);
            }

        }
        return ""
    }
    
}   
