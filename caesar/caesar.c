#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

bool is_numeric_string(string s);
char rotate_char(char c, int k);
// Return Value only if it is digital numerical
bool is_numeric_string(string s)
{
    for(int i = 0, n = strlen(s); i < n; i++)
    {
        if ( !isdigit(s[i]))
        {
            return false;
        }
    }
    return true;
}

// Rotate positions accordingly

char rotate_char(char c, int k)
{
    if (isalpha (c))
    {
        char base = isupper(c) ? 'A' : 'a';
        int p_i = c -base;
        int c_i = (p_i + k) % 26;
        char cipher_char = c_i + base;
        return cipher_char;
    }
    else
    {
    return c;
    }
}

int main (int argc, string argv[])
{
    if (arg != 2)
    {
        printf("Usage: ./caesar key\n");
            return 1;
    }
    if (!is_numeric_string(argv[1]))
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }
    int k = atoi(argv[1]);
    //Ask for the text
    string plaintext = get_string("plaintext: ");
    // Show the encripted text
    printf("ciphertext: ");
    for (int i = 0, n = strlen(plaintext); i < n; i++)
    {
        char cipher_char = rotate_char(plaintext[i],  k);
        printf("%c", cipher_char);
    }
    return 0;
}
