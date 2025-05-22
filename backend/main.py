if __name__ == "__main__":
    import uvicorn
    PORT = 3000
    uvicorn.run("app.main:app", host="localhost", port=PORT)