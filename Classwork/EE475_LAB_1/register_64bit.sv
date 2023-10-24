/**
 * @brief 64-bit register module with 64 D flip-flops.
 *
 * @details This module contains 64 D flip-flops that are generated using a for loop.
 * Each flip-flop is connected to a bit of the input data bus and the output is stored
 * in a 64-bit output register. The module has an enable input that controls whether the
 * input data is stored in the register or not. It also has a reset input that resets all
 * the flip-flops to 0 and a clock input that controls the timing of the register.
 *
 * @param d     Input data bus of 64 bits.
 * @param en    Enable input that controls whether the input data is stored in the register or not.
 * @param reset Reset input that resets all the flip-flops to 0.
 * @param clk   Clock input that controls the timing of the register.
 * @param q     Output register of 64 bits.
 */
module register_64bit(input [63:0] d, input en, input reset, input clk, output reg [63:0] q);

    genvar i;

    generate
        // Generate 64 D flip-flops using a for loop
        for(i = 0; i < 64; i=i+1) begin : gen_flipflops
            D_FF flipflop(.d(d[i]), .reset(reset), .clk(clk), .q(q[i]));
        end
    endgenerate

endmodule