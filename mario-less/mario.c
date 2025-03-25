#include <cs50.h>
#include <stdio.h>

void print_pyramid_row(int amount, int height);

int main(void) // Main function, it asks you for the amout of levels you want
{
    int height;
    do
    {
        get_int("What height do you want ");
    }
    
    while (height < 1 && height > 100);
        for (int i = 1; i <= height; i++)
        {
            print_pyramid_row(i, height);
            printf("\n");
        }
        return 0;
    }

void print_pyramid_row (int amount, int height) // This prints how many rows and spaces we need for the pyramid
{
    for (int i = 0; i < height - amount ; i++) // Prints empty Spaces
    {
        printf(" ");
    }
    for (int i = 0; i < amount; i++)
    {
        printf("#"); //Prints #
    }
}
