server file
# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory to /app
WORKDIR /app

# Clone the Frappe framework from the official repository
RUN git clone https://github.com/frappe/frappe-bench.git bench

# Change the working directory to /app/bench
WORKDIR /app/bench

# Install Frappe dependencies
RUN apt-get update && \
    apt-get install -y \
        build-essential \
        libffi-dev \
        libssl-dev \
        libmysqlclient-dev \
        libjpeg-dev \
        libtiff5-dev \
        libx11-dev \
        libxext-dev \
        zlib1g-dev \
        libfreetype6-dev \
        liblcms2-dev \
        libwebp-dev \
        tcl8.6-dev \
        tk8.6-dev \
        python-tk \
        redis-tools \
        redis-server \
        wkhtmltopdf

# Install Frappe
RUN pip install -e ./apps/frappe --no-cache-dir

# Create a new Frappe site
RUN bench init frappe-bench --frappe-branch version-13

# Expose ports for Frappe development
EXPOSE 8000
EXPOSE 9000

# Set the default command to run Frappe development server
CMD ["bench", "start"]
