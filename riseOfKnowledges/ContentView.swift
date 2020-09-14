//
//  ContentView.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/14/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct ContentView: View {
    
    @State private var username = ""
    
    var body: some View {
        VStack(alignment: .center, spacing: 15) {
            Image("rok")
                .resizable()
                .frame(width: 250, height: 250)
                .padding(.bottom, 50)
                .padding(.top, 100)
            
            TextField("Username", text: self.$username)
                .padding()
                .background(Color.gray)
                .cornerRadius(20.0)
//                .frame(width: 300, height: 50)
//            Text(username)
            
            Button(action: {}) {
                Text("Play")
                    .font(.headline)
                    .foregroundColor(.white)
                    .padding()
                    .frame(width: 300, height: 50)
                    .background(LinearGradient(gradient: Gradient(colors: [.pink, .purple]), startPoint: .leading, endPoint: .trailing))
                    .opacity(70.0)
                    .cornerRadius(20)
            }
            Spacer()
        }
        .background(Color(red: 0, green: 0, blue: 0.3, opacity: 0.9))
        .edgesIgnoringSafeArea(.all)
    }
    
    
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
