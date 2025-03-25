#include <cs50.h>
#include <stdio.h>

const int MAX_VALUE = 100;
const int MIN_VALUE = 0;

void print_pyramid_row(int amount, int height);

int main(void) // Main function, it asks you for the amout of levels you want
{
    int height = get_int("What height do you want ");
    printf("Height: %i\n", MAX_VALUE);
    if (height > MIN_VALUE && height < MAX_VALUE)
    {
        for (int i = height; i > MIN_VALUE; i--)
        {
            print_pyramid_row(i, height);
            printf("\n");
        }
    }
    else
        printf("Not a valid number , plese enter a number between 1-99\n");
}

void print_pyramid_row (int amount, int height) // This prints how many rows and spaces we need for the pyramid
{
    for (int i = MIN_VALUE; i < height; i++) // Prints empty Spaces
    {
        printf(" ");
    }
    for (int i = MIN_VALUE; i < amount; i++)
    {
        printf("#"); //Prints #
    }
}
