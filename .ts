#!/bin/bash
tmux new-session -d -s mysession  # Create a new detached session
tmux split-window -v               # Split vertically
tmux select-pane -t 0              # Select the first pane
tmux attach-session -t mysession   # Attach to the session

