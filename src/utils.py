# Clean Code Utilities - Python Code Snippet

def greet_user(name):
    """
    Generate a greeting message.
    :param name: str - Name of the user.
    :return: str - Greeting message.
    """
    if not name:
        raise ValueError('Name is required')
    return f'Hello, {name}!'

if __name__ == '__main__':
    print(greet_user('World'))  # Output: Hello, World!