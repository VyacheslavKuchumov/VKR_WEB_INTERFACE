# Use an official Python runtime as a parent image
FROM python:3.13-slim

# Set workdir
WORKDIR /app

# Install system deps (if needed) then Python deps
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy your FastAPI app code
COPY . .

# Expose port (match docker-compose)
EXPOSE 8000

# Run the app with Uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
