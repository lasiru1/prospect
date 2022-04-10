echo "Enter port number to be closed :: "
read port
sudo kill $(sudo lsof -t -i:$port)
