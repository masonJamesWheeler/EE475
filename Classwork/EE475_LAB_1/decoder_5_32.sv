/**
 * @brief This module implements a 5-to-32 decoder.
 * 
 * @param sel Input signal that selects which output bit to set high.
 * @param out Output signal that represents the selected bit as high and all other bits as low.
 */
module decoder_5_32(input [4:0] sel, output reg [31:0] out);
    always @(*) begin
        out = 32'b0; // Initialize all bits to low.
        out[sel] = 1'b1; // Set the selected bit to high.
    end
endmodule