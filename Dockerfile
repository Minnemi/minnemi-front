FROM m1nnemi/front:latest
COPY . .
EXPOSE 80
RUN npm install -g http-server
CMD ["http-server", "-p", "80"]
