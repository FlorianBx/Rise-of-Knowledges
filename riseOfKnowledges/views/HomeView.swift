//
//  HomeView.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/17/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct HomeView: View {
    
    @ObservedObject var quizzDatas = QuizzViewModel()
    @ObservedObject var userDatas = ScoreViewModel()
    
    @State private var username: String = ""
    @State private var showQuizzView: Bool = false
    
    var body: some View {
        ZStack {
            NavigationView {
                VStack(alignment: .center, spacing: 15) {
                    NavigationLink(destination: QuizzView(apiDatas: self.quizzDatas, userDatas: self.userDatas), isActive: $showQuizzView) {
                        EmptyView()
                    }
                    Image("rok")
                        .resizable()
                        .frame(width: 250, height: 250)
                        .padding(.bottom, 50)
                        .padding(.top, 100)
                    
                    HStack (alignment: .center) {
                        Image(systemName: "person")
                            .foregroundColor(.black)
                            .opacity(0.1)
                        TextField("Username", text: $username)
                            .foregroundColor(.white)
                        if !username.isEmpty {
                            Image(systemName: "xmark.circle.fill")
                                .imageScale(.large)
                                .foregroundColor(Color(.white))
                                .onTapGesture {
                                    self.username = ""
                                }
                        }
                    }
                    .frame(width: 260, height: 50)
                    .padding(.horizontal, 20)
                    .background(Color("cyanQuizz"))
                    .cornerRadius(10.0)
                    
                    Button(action: {
                        userDatas.userScore.append(UserScoreModel(name: self.username, datas: []))
                        self.showQuizzView = true
                    }) {
                        Text("Play")
                            .font(.headline)
                            .foregroundColor(.white)
                            .padding()
                            .frame(width: 300, height: 50)
                            .background(username.isEmpty || quizzDatas.quizz.isEmpty ?
                                            LinearGradient(gradient: Gradient(colors: [.gray, .gray]), startPoint: .leading, endPoint: .trailing) :
                                            LinearGradient(gradient: Gradient(colors: [Color("cyanQuizz"), .purple]), startPoint: .leading, endPoint: .trailing))
                            .opacity(70.0)
                            .cornerRadius(10)
                    }
                    .disabled(username.isEmpty || quizzDatas.quizz.isEmpty)
                    VStack {
                        quizzDatas.quizz.isEmpty ? Indicator() : nil
                    }
                    .frame(minWidth: 0, maxWidth: .infinity, minHeight: 0, maxHeight: .infinity)
                    Spacer()
                }.onAppear() {
                    self.quizzDatas.getQuizz()
                }
                .background(Color("blueQuizz"))
                .edgesIgnoringSafeArea(.all)
            }
        }
    }
}

struct Home_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
            .previewDevice("iPhone 11 Pro")
    }
}
