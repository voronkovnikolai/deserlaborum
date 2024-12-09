function processArc(th_arc, sweep) {
    // Initial condition check
    if (th_arc <= 0) {
        console.log("Invalid arc value.");
        return;
    } else if (th_arc > 0 && sweep === 0) {
        // Case when th_arc is greater than 0 and sweep is exactly 0
        console.log("Processing arc with non-zero angle but no sweep.");
        // Implement your logic for this scenario here
    } else if (th_arc > 0 && sweep > 0) {
        // Additional case when both th_arc and sweep are greater than 0
        console.log("Processing arc with non-zero angle and positive sweep.");
        // Implement your logic for this scenario here
    } else {
        // Handle any other unexpected cases if needed
        console.log("Unexpected case.");
    }
}

// Example usage
processArc(30, 0);  // Should output: Processing arc with non-zero angle but no sweep.
processArc(30, 10); // Should output: Processing arc with non-zero angle and positive sweep.
processArc(-5, 0);  // Should output: Invalid arc value.
