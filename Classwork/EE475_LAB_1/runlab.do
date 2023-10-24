# Compile the source files
vlog -reportprogress 300 decoder_5_32.sv D_FF.sv mux_32_1.sv regfile.sv register_64bit.sv regstim.sv 

# Load the simulation for the testbench module
vsim regstim

# Configure the waveform view
view wave

# Add signals to the waveform view
add wave -position end sim:/regstim/clk
add wave -position end sim:/regstim/ReadRegister1
add wave -position end sim:/regstim/ReadRegister2
add wave -position end sim:/regstim/WriteRegister
add wave -position end sim:/regstim/RegWrite
add wave -position end sim:/regstim/WriteData
add wave -position end sim:/regstim/ReadData1
add wave -position end sim:/regstim/ReadData2

# Run the simulation
run -all

# Optionally, stop or exit the simulator after the simulation completes
# exit
