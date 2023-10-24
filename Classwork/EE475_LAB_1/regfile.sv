/**
 * @brief Register file module 
 *
 * Register file module
 * @param ReadData1 Output for read data 1
 * @param ReadData2 Output for read data 2
 * @param WriteData Input for write data
 * @param ReadRegister1 Input for read register 1
 * @param ReadRegister2 Input for read register 2
 * @param WriteRegister Input for write register
 * @param RegWrite Input for register write enable
 * @param clk Input for clock
 */
module regfile(
    output [63:0] ReadData1, 
    output [63:0] ReadData2,
    input [63:0] WriteData,
    input [4:0] ReadRegister1,
    input [4:0] ReadRegister2,
    input [4:0] WriteRegister,
    input RegWrite,
    input clk
);

    wire [31:0] write_enable; // Write enable wire
    wire [31:0][63:0] registers; // Registers wire
    
    // Decoder
    decoder_5_32 dec(.sel(WriteRegister), .out(write_enable)); // 5-to-32 decoder instance
    
    // 32 Registers of 64 bits
    genvar i;
    generate
        for(i = 0; i < 32; i=i+1) begin : regs_loop
            if(i == 31) 
                assign registers[i] = 64'b0;  // For ARM, R31 is hardwired to 0
            else
                register_64bit reg_instance(.d(WriteData), .en(write_enable[i]), .reset(1'b0), .clk(clk), .q(registers[i])); // 64-bit register instance
        end
    endgenerate
    
    // 2 Multiplexors for read
    mux_32_1 mux1(.inputs(registers), .sel(ReadRegister1), .out(ReadData1)); // 32-to-1 multiplexer instance for read data 1
    mux_32_1 mux2(.inputs(registers), .sel(ReadRegister2), .out(ReadData2)); // 32-to-1 multiplexer instance for read data 2
    
endmodule
