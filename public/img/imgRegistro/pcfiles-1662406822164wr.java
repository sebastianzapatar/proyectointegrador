import java.util.Scanner;
import java.util.Arrays;
import java.util.Random;
public class wr {
//La pregunta que nos hacemos es, ¿cuántos de estos saltos serán hacia arriba y cuántos hacia
	/*abajo? Mario realiza un salto hacia arriba cuando tiene que alcanzar un muro que está por
			encima de él, y hacia abajo cuando tiene que alcanzar un muro que está por debajo.Pedir
			por consola el nombre de usuario y vídeo juego favorito, y el programa debe mostrar
			El nombre y su video juego favorito es por favor regalen un pc gamer :)
			Ejemplo nombre=”Sebastian Zapata” videojuego=”Paper Mario the origami King”
			Se debe mostrar por consola Sebastian Zapata y su vídeo juego favorito es Paper Mario the
			origami King que buen gusto :P.
			*/

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner linea = new Scanner(System.in);
		System.out.println("Ingrese su nombre");
		String nombre=linea.next();
		System.out.println("ingrese su video juego favorito");
		String vj=linea.next();
		System.out.println("tu nombre es " +nombre+ " y tu videojuego favorito es " +vj+ " ,que cool");
		
		
		
		//Dados dos vectores (deben ser leídos por consola) mostrar la intersección de los vectores,
		/*
		*/
		System.out.println("ingrese el tamaño de su vector 1");
		int n=linea.nextInt();
		long[] vector=new long[n];
		Random aleatorio=new Random();
		System.out.println("ingrese el tamaño de su vector 2");
		int m=linea.nextInt();
		long[] vector2=new long[n];
		Random aleatorio2=new Random();
		int contador=0;
		for(int i=0;i<vector.length;i++) {
			vector[i]=aleatorio.nextLong(10);
		}
			for(int j=0; j<vector2.length;j++) {
				vector2[j]=aleatorio2.nextLong(10);
			}
			
			for(int i=0;i<vector.length;i++) {
				for(int j=0;j<vector2.length;j++) {
					if(vector[i]==vector2[j]) {
						System.out.println(" Los números en común entre vectores son el " +vector2[j]);
						contador++;
					}
					
					
				
				}
				}
			if(contador==0) {
				System.out.println("No hay numeros iguales");
			}
			// Crear un programa que reciba un arreglo de números enteros. El programa debe crear
			/*otros dos arreglos, pero de la siguiente manera en el arreglo 1 los números impares
			organizados de mayor a menor y en el arreglo 2 los números pares organizados de menor
			a mayor.
			
*/
		System.out.println("cuantos datos tiene tu arreglo?");	
			int c=linea.nextInt();
			long[] arreglo=new long[c];
			int contadorpares=0;
			int contadorimpares=0;
			
			for(int i=0; i<arreglo.length; i++) {
				System.out.println("ingresa los datos de tu arreglo");
				arreglo[i]=linea.nextLong();
				if(arreglo[i]%2==0) {
					contadorpares++;
				}
				else {
					contadorimpares++;
						}
					}
			long[]par=new long[contadorpares];
			long[]impar=new long[contadorimpares];
			
			contadorpares=0;
			contadorimpares=0;
			
			for(int i=0; i<arreglo.length;i++) {
				if(arreglo[i]%2==0) {
					par[contadorpares]= arreglo[i];
					contadorpares++;
				}
				else {
					impar[contadorimpares]= arreglo[i];
					contadorimpares++;
				}
			}
			Arrays.sort(impar);
			Arrays.sort(par);
			System.out.println("tu Vector de impares");
			for(int i=impar.length-1;i>=0;i--) {
				System.out.println(impar[i]);
			}
			System.out.println("tu Vector de pares");
			for(int i=0;i<par.length;i++) {
				System.out.println(par[i]);
	
					}
			
			}
}
	



