/**
 * Module: mux_32_1
 * 
 * Description: 32:1 multiplexer module that selects one of the 32 input buses based on the 5-bit selection input.
 * 
 * Ports:
 *   - inputs: 32 input buses, each 64 bits wide
 *   - sel: 5-bit selection input
 *   - out: output bus, 64 bits wide
 */

module mux_32_1(
    input [31:0][63:0] inputs, // 32 input buses, each 64 bits wide
    input [4:0] sel,           // 5-bit selection input
    output [63:0] out          // output bus, 64 bits wide
);

    // Assign the output bus to the selected input bus
    assign out = inputs[sel];

endmodule