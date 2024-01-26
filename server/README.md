# Use the official Ubuntu image as the base
FROM ubuntu:latest

# Set non-interactive mode during build
ENV DEBIAN_FRONTEND=noninteractive

# Install required dependencies for Frappe Framework
RUN apt-get update \
    && apt-get install -y \
        python3 \
        python3-pip \
        build-essential \
        libssl-dev \
        libffi-dev \
        libmysqlclient-dev \
        libjpeg8-dev \
        liblcms2-dev \
        libblas-dev \
        liblapack-dev \
        libatlas-base-dev \
        libproj-dev \
        wkhtmltopdf \
        nodejs \
        npm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Upgrade pip and install Frappe Bench
RUN pip3 install --upgrade pip \
    && pip3 install frappe-bench

# Create a new Frappe Bench
RUN useradd -m frappe \
    && su - frappe -c "bench init frappe-bench --frappe-branch version-13"

# Expose ports for Frappe Bench
EXPOSE 8000 9000

# Set the working directory
WORKDIR /home/frappe/frappe-bench

# Run Frappe Bench
CMD ["bench", "start"]