import os
import shutil

def delete_directory(path):
    try:
        if os.path.exists(path):
            shutil.rmtree(path)
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    target_directory = "./node_modules"
    # target_directory = "./dist"
    delete_directory(target_directory)