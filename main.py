import os
import sys

def rename_files_and_dirs(start_path):
    """
    Recursively renames files and directories by removing ' ' symbols from their names.
    
    Args:
        start_path (str): The starting directory path to scan for renaming.
    """
    for root, dirs, files in os.walk(start_path, topdown=False):
        # Rename files first
        for filename in files:
            if ' ' in filename:
                old_path = os.path.join(root, filename)
                new_name = filename.replace(' ', '')
                new_path = os.path.join(root, new_name.strip())
                try:
                    os.rename(old_path, new_path)
                    print(f"Renamed file: {old_path} → {new_path}")
                except Exception as e:
                    print(f"Error renaming {old_path}: {e}")
        
        # Then rename directories
        for dirname in dirs:
            if ' ' in dirname:
                old_path = os.path.join(root, dirname)
                new_name = dirname.replace(' ', '')
                new_path = os.path.join(root, new_name)
                try:
                    os.rename(old_path, new_path)
                    print(f"Renamed directory: {old_path} → {new_path}")
                except Exception as e:
                    print(f"Error renaming {old_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        start_directory = sys.argv[1]
    else:
        start_directory = input("Enter the directory path to clean (default is current directory): ")
        if not start_directory:
            start_directory = "."
    
    if not os.path.exists(start_directory):
        print(f"Error: The path {start_directory} does not exist.")
        sys.exit 
    
    confirm = input(f"This will remove ' ' symbols from all file and directory names in {start_directory} and its subdirectories. Continue? (y/n): ")
    if confirm.lower() != 'y':
        print("Operation cancelled.")
        sys.exit(0)
    
    print(f"Starting to clean file and directory names in {start_directory}...")
    rename_files_and_dirs(start_directory)
    print("Cleaning completed!")